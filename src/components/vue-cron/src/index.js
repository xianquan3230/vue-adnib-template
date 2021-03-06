import vueCron from './vueCron.vue'
import Language from '../src/language'

export let cron = vueCron

export default {
  name: 'vueCron',
  props: ['data'],
  data() {
    return {
      second: {
        cronEvery: '',
        incrementStart: '3',
        incrementIncrement: '5',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: []
      },
      minute: {
        cronEvery: '',
        incrementStart: '3',
        incrementIncrement: '5',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: []
      },
      hour: {
        cronEvery: '',
        incrementStart: '3',
        incrementIncrement: '5',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: []
      },
      day: {
        cronEvery: '',
        incrementStart: '1',
        incrementIncrement: '1',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: [],
        cronLastSpecificDomDay: 1,
        cronDaysBeforeEomMinus: '',
        cronDaysNearestWeekday: ''
      },
      week: {
        cronEvery: '',
        incrementStart: '1',
        incrementIncrement: '1',
        specificSpecific: [],
        cronNthDayDay: 1,
        cronNthDayNth: '1'
      },
      month: {
        cronEvery: '',
        incrementStart: '3',
        incrementIncrement: '5',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: []
      },
      year: {
        cronEvery: '',
        incrementStart: '2017',
        incrementIncrement: '1',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: []
      },
      output: {
        second: '',
        minute: '',
        hour: '',
        day: '',
        month: '',
        Week: '',
        year: ''
      }
    }
  },
  watch: {
    data() {
      this.rest(this.$data)
    }
  },
  computed: {
    text() {
      return Language[this.i18n || 'cn']
    },
    secondsText() {
      let seconds = ''
      let cronEvery = this.second.cronEvery
      switch (cronEvery.toString()) {
        case '1':
          seconds = '*'
          break
        case '2':
          seconds = this.second.incrementStart + '/' + this.second.incrementIncrement
          break
        case '3':
          this.second.specificSpecific.map(val => {
            seconds += val + ','
          })
          seconds = seconds.slice(0, -1)
          break
        case '4':
          seconds = this.second.rangeStart + '-' + this.second.rangeEnd
          break
      }
      return seconds
    },
    minutesText() {
      let minutes = ''
      let cronEvery = this.minute.cronEvery
      switch (cronEvery.toString()) {
        case '1':
          minutes = '*'
          break
        case '2':
          minutes = this.minute.incrementStart + '/' + this.minute.incrementIncrement
          break
        case '3':
          this.minute.specificSpecific.map(val => {
            minutes += val + ','
          })
          minutes = minutes.slice(0, -1)
          break
        case '4':
          minutes = this.minute.rangeStart + '-' + this.minute.rangeEnd
          break
      }
      return minutes
    },
    hoursText() {
      let hours = ''
      let cronEvery = this.hour.cronEvery
      switch (cronEvery.toString()) {
        case '1':
          hours = '*'
          break
        case '2':
          hours = this.hour.incrementStart + '/' + this.hour.incrementIncrement
          break
        case '3':
          this.hour.specificSpecific.map(val => {
            hours += val + ','
          })
          hours = hours.slice(0, -1)
          break
        case '4':
          hours = this.hour.rangeStart + '-' + this.hour.rangeEnd
          break
      }
      return hours
    },
    daysText() {
      let days = ''
      let cronEvery = this.day.cronEvery
      switch (cronEvery.toString()) {
        case '1':
          break
        case '2':
        case '4':
        case '11':
          days = '?'
          break
        case '3':
          days = this.day.incrementStart + '/' + this.day.incrementIncrement
          break
        case '5':
          this.day.specificSpecific.map(val => {
            days += val + ','
          })
          days = days.slice(0, -1)
          break
        case '6':
          days = 'L'
          break
        case '7':
          days = 'LW'
          break
        case '8':
          days = this.day.cronLastSpecificDomDay + 'L'
          break
        case '9':
          days = 'L-' + this.day.cronDaysBeforeEomMinus
          break;
        case '10':
          days = this.day.cronDaysNearestWeekday + 'W'
          break
      }
      return days;
    },
    weeksText() {
      let weeks = ''
      let cronEvery = this.day.cronEvery
      switch (cronEvery.toString()) {
        case '1':
        case '3':
        case '5':
          weeks = '?'
          break
        case '2':
          weeks = this.week.incrementStart + '/' + this.week.incrementIncrement
          break
        case '4':
          this.week.specificSpecific.map(val => {
            weeks += val + ','
          })
          weeks = weeks.slice(0, -1)
          break
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
          weeks = '?'
          break
        case '11':
          weeks = this.week.cronNthDayDay + '#' + this.week.cronNthDayNth
          break
      }
      return weeks
    },
    monthsText() {
      let months = ''
      let cronEvery = this.month.cronEvery
      switch (cronEvery.toString()) {
        case '1':
          months = '*'
          break
        case '2':
          months = this.month.incrementStart + '/' + this.month.incrementIncrement
          break
        case '3':
          this.month.specificSpecific.map(val => {
            months += val + ','
          })
          months = months.slice(0, -1)
          break
        case '4':
          months = this.month.rangeStart + '-' + this.month.rangeEnd
          break
      }
      return months
    },
    yearsText() {
      let years = ''
      let cronEvery = this.year.cronEvery
      switch (cronEvery.toString()) {
        case '1':
          years = '*'
          break
        case '2':
          years = this.year.incrementStart + '/' + this.year.incrementIncrement
          break
        case '3':
          this.year.specificSpecific.map(val => {
            years += val + ','
          })
          years = years.slice(0, -1)
          break
        case '4':
          years = this.year.rangeStart + '-' + this.year.rangeEnd
          break
      }
      return years
    },
    cron() {
      return `${this.secondsText || '*'} ${this.minutesText || '*'} ${this.hoursText || '*'} ${this.daysText || '*'} ${this.monthsText || '*'} ${this.weeksText || '?'} ${this.yearsText || '*'}`
    }
  },
  methods: {
    getValue() {
      return this.cron
    },
    change() {
      this.$emit('change', this.cron)
      this.close()
    },
    close() {
      this.$emit('close')
    },
    rest(data) {
      for (let i in data) {
        if (data[i] instanceof Object) {
          this.rest(data[i])
        } else {
          switch (typeof data[i]) {
            case 'object':
              data[i] = []
              break
            case 'string':
              data[i] = ''
              break
          }
        }
      }
    }
  },
  mounted() {
  }
}

