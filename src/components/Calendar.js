import React from 'react'

import CalendarMonth from 'CalendarMonth'
import {CalendarWeekdays} from 'CalendarWeekdays'
import CalendarDatesContainer from 'CalendarDatesContainer'

export let Calendar = props =>
  <div>
    <CalendarMonth />
    <CalendarWeekdays />
    <CalendarDatesContainer />
  </div>
