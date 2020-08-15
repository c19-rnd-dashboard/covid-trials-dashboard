import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import AssignmentIcon from '@material-ui/icons/Assignment'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import AssessmentIcon from '@material-ui/icons/Assessment'

import {
  spreadsheetDataSource,
  howYouCanHelpUrl,
  faqUrl,
  vaccineStatusSummaryUrl,
  contactUsUrl,
} from 'constants/config'

export const drawerLinks = [
  {
    name: 'Full dataset',
    url: spreadsheetDataSource,
    Icon: AssignmentIcon,
  },
  {
    name: 'Why and How to Volunteer',
    url: howYouCanHelpUrl,
    Icon: HowToRegIcon,
  },
  {
    name: 'FAQ',
    url: faqUrl,
    Icon: HelpOutlineIcon,
  },
  {
    name: 'Vaccine Trials Summary',
    url: vaccineStatusSummaryUrl,
    Icon: AssessmentIcon,
  },
  {
    name: 'Contact Us',
    url: contactUsUrl,
    Icon: MoveToInboxIcon,
  },
]
