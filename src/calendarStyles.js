import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  calendarWrapper: {
  },
  calendarWrapperAgenda: {
    flex: 1,
  },
  calendar: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 10,
    height: 150
  },
  headerTitle: {
    alignContent: 'center',
    textAlign: 'center',
    flex: 1,
    marginBottom: 15,
    fontFamily: "RobotoMedium",
    fontSize: 16,
    color: "#D0D0D0",
    textTransform: 'capitalize'
  },
  headerNavigation: {
    paddingHorizontal: 20,
  },
  weekDays: {
    paddingVertical: 5,
    flexDirection: 'row',
  },
  weekDay: {
    textAlign: 'center',
    flex: 1,
    color: "#FAFAFA",
    fontFamily: "RobotoRegular",
    textTransform: 'capitalize'
  },
  week: {
    flexDirection: 'row'
  },
  day: {
    flex: 1,
    position: 'relative',
    paddingVertical: 14,
    paddingHorizontal: 4,
    borderRadius: 7,
    backgroundColor: "#232323",
    marginHorizontal: 5,
  },
  dayTextWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    textAlign: 'center',
    color: "#FAFAFA",
    fontFamily: "RobotoBold",
    fontSize: 16
  },
  dayDisabled: {
    flex: 1,
    paddingVertical: 7,
    borderRadius: 7,
  },
  dayDisabledText: {
    textAlign: 'center',
    color: '#727272',
    fontFamily: "RobotoBold",
    fontSize: 16
  },
  daySelected: {
    flex: 1,
    paddingVertical: 7,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#DFBFF9'
  },
  daySelectedText: {
    textAlign: 'center',
  },
  expander: {
    backgroundColor: '#DFBFF9',
    width: 50,
    height: 4,
    borderRadius: 2,
    margin: 5
  },
  expanderAndroid: {
    borderColor: '#DFBFF9',
    width: 40,
    height: 17,
  },
  expanderAndroidInner: {
    height: 1.5,
    marginVertical: 4,
    marginHorizontal: 6,
    backgroundColor: '#DFBFF9'
  },
  expanderWrapper: {
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayItem: {
    position: 'absolute',
    bottom: -8, 
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#7C14B8'
  },
  // agendaWrapper: {
  //   backgroundColor: '#fff'
  // }
})
