import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {transactionNoteInput, transactionNoteCancel} from 'actions'

Modal.setAppElement('#root')

const Wrapper = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 0 auto;
  max-width: 26rem;
  padding: 10px 0;
  text-align: right;
  width: 100%;
`

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-left: 10%;
  opacity: .8;
  width: 100%;
`

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #ef5350;
  display: block;
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  opacity: .87;
  padding-bottom: 5px;
  width: 80%;

  &:focus {
    outline: none;
  }
`

const ModalButtonWrapper = styled.div`
  margin: 1.5em 10% 1.5em 0;
  text-align: right;
`

const ModalButton = styled.button`
  background: none;
  border: none;
  color: #f44336;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-left: 1.5em;
  padding: 0;

  &:focus {
    outline: none;
  }
`

class TransactionNewNote extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      currentNote: ''
    }
    this._openModal = this._openModal.bind(this)
    this._inputNote = this._inputNote.bind(this)
    this._closeModal = this._closeModal.bind(this)
    this._cancelNote = this._cancelNote.bind(this)
  }

  _openModal () {
    this.setState({showModal: true})
  }

  _inputNote (e) {
    this.props.dispatch(transactionNoteInput(e.target.value))
  }

  _closeModal () {
    this.setState({showModal: false})
  }

  _cancelNote () {
    this.props.dispatch(transactionNoteCancel(this.state.currentNote))
    this._closeModal()
  }

  render () {
    let getParent = () => document.querySelector('#root')
    let {newTransactionNote} = this.props

    return (
      <Wrapper>
        <button onClick={this._openModal}>Note</button>
        <Modal
          contentLabel='Add Note'
          isOpen={this.state.showModal}
          parentSelector={getParent}
          onRequestClose={this._closeModal}
          className='Modal'
          overlayClassName='Overlay'
        >
          <ModalTitle>Add Note</ModalTitle>
          <Input placeholder='Note...' onChange={this._inputNote} value={newTransactionNote} />
          <ModalButtonWrapper>
            <ModalButton onClick={this._cancelNote}>CANCEL</ModalButton>
            <ModalButton onClick={this._closeModal}>DONE</ModalButton>
          </ModalButtonWrapper>
        </Modal>
      </Wrapper>
    )
  }

  componentDidMount () {
    this.setState({currentNote: this.props.newTransactionNote})
  }
}

export default connect(
  state => ({
    newTransactionNote: state.newTransactionNote
  })
)(TransactionNewNote)
