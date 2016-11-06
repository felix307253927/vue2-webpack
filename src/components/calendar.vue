<style scoped>
  .calendar {
    width: 300px;
    padding: 10px;
    background: #fff;
    position: absolute;
    border: 1px solid #DEDEDE;
    border-radius: 2px;
    opacity: .95;
    transition: all .5s ease;
  }

  .calendar-enter, .calendar-leave {
    opacity: 0;
    transform: translate3d(0, -10px, 0);
  }

  .calendar:before {
    position: absolute;
    left: 30px;
    top: -10px;
    content: "";
    border: 5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #DEDEDE;
  }

  .calendar:after {
    position: absolute;
    left: 30px;
    top: -9px;
    content: "";
    border: 5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #fff;
  }

  .calendar-tools {
    height: 32px;
    font-size: 20px;
    line-height: 32px;
    color: #5e7a88;
  }

  .calendar-tools .float.left {
    float: left;
  }

  .calendar-tools .float.right {
    float: right;
  }

  .calendar-tools input {
    font-size: 20px;
    line-height: 32px;
    color: #5e7a88;
    width: 70px;
    text-align: center;
    border: none;
    background-color: transparent;
  }

  .calendar-tools span {
    cursor: pointer;
  }

  .calendar-prev {
    float: left;
  }

  .calendar-next {
    float: right;
  }

  .calendar table {
    clear: both;
    width: 100%;
    margin-bottom: 10px;
    border-collapse: collapse;
    color: #444444;
  }

  .calendar td {
    margin: 2px !important;
    padding: 0px 0;
    width: 14.28571429%;
    height: 34px;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    line-height: 125%;
    cursor: pointer;
  }

  .calendar td.week {
    pointer-events: none !important;
    cursor: default !important;
  }

  .calendar td.disabled {
    color: #c0c0c0;
    pointer-events: none !important;
    cursor: default !important;
  }

  .calendar td span {
    display: block;
    height: 30px;
    line-height: 30px;
    margin: 2px;
    border-radius: 2px;
  }

  .calendar td span:hover {
    background: #f3f8fa;
  }

  .calendar td.selected span {
    background-color: #5e7a88;
    color: #fff;
  }

  .calendar td.selected span:hover {
    background-color: #5e7a88;
    color: #fff;
  }

  .calendar thead td {
    text-transform: uppercase;
  }

  .calendar .timer {
    margin: 10px 0;
    text-align: center;
  }

  .calendar .timer input {
    border-radius: 2px;
    padding: 5px;
    font-size: 14px;
    line-height: 18px;
    color: #5e7a88;
    width: 50px;
    text-align: center;
    border: 1px solid #efefef;
  }

  .calendar .timer input:focus {
    border: 1px solid #5e7a88;
  }

  .calendar-button {
    text-align: center;
  }

  .calendar-button span {
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    vertical-align: baseline;
    background: #5e7a88;
    color: #fff;
    margin: 0 .25em 0 0;
    padding: .6em 2em;
    font-size: 1em;
    line-height: 1em;
    text-align: center;
    border-radius: .3em;
  }

  .calendar-button span.cancel {
    background: #efefef;
    color: #666;
  }

  .calendar .lunar {
    font-size: 11px;
    line-height: 150%;
    color: #aaa;
  }

  .calendar td.selected .lunar {
    color: #fff;
  }
</style>

<template>
  <div @click.stop="" class="calendar" v-show="calendar.show" :style="{'left':calendar.x+'px','top':calendar.y+'px'}"
       transition="calendar"
       transition-mode="out-in">
    <div v-if="calendar.type!='time'">
      <div class="calendar-tools">
                <span class="calendar-prev" @click="prev">
                    <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink"><g class="transform-group"><g
                        transform="scale(0.015625, 0.015625)"><path
                        d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z"
                        fill="#5e7a88"></path></g></g></svg>
                </span>
        <span class="calendar-next" @click="next">
                    <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink"><g class="transform-group"><g
                        transform="scale(0.015625, 0.015625)"><path
                        d="M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z"
                        fill="#5e7a88"></path></g></g></svg>
                </span>
        <div class="text center">
          <input type="text" v-model="year" :value="year" @change="render(year,month)" min="1970" max="2200" maxlength="4">/ &nbsp;{{monthString}}
        </div>
      </div>
      <table cellpadding="5">
        <thead>
        <tr>
          <td v-for="week in calendar.weeks" class="week">{{week}}</td>
        </tr>
        </thead>
        <tr v-for="(w,k1) in days" :title="k1">
          <td :title="k2"
              v-for="(d, k2) in w"
              :class="{'selected':d.selected,'disabled':d.disabled}"
              @click="select(k1,k2,$event)" @touchstart="select(k1,k2,$event)">
            <span :title="k1">{{d.day}}</span>
          </td>
        </tr>
      </table>
    </div>
    <div class="calendar-time" v-show="calendar.type=='datetime'||calendar.type=='time'">

      <div class="timer">
        <input type="text" v-model="hour" :value="hour" min="0" max="23" maxlength="2">
        时
        <input type="text" v-model="minute" :value="minute" min="0" max="59" maxlength="2">
        分
        <input type="text" v-model="second" :value="second" min="0" max="59" maxlength="2">
        秒
      </div>
    </div>
    <div class="calendar-button" v-show="calendar.type=='datetime'||calendar.type=='time'||calendar.range">
      <span @click="ok">确定</span>
      <span @click="cancel" class="cancel">取消</span>
    </div>
  </div>
</template>

<script>
  const options = {
    show      : false,
    type      : "date",
    value     : "",
    x         : 0,
    y         : 0,
    begin     : "",
    end       : "",
    range     : false,
    rangeBegin: [],
    rangeEnd  : [],
    sep       : "",
    weeks     : null,
    months    : null
  };
  if(navigator.language.match(/zh|ZH|cn|CN/)){
    options.weeks = ['日', '一', '二', '三', '四', '五', '六'];
    options.months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  } else {
    options.weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    options.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  }
  function initCalendar(opts) {
    for (let k in options) {
      opts[k] = opts[k] || opts[k] === false ? opts[k] : options[k];
    }
  }
  export default {
    props  : {
      calendar: {
        type: Object,
        default(){
          return options
        }
      }
    },
    data() {
      return {
        year        : 0,
        month       : 0,
        day         : 0,
        hour        : 0,
        minute      : 0,
        second      : 0,
        days        : [],
        today       : [],
        currentMonth: Number,
        monthString : "",
        now         : 0,
        initTimer   : null
      }
    },
    created() {
      this.calendar.show && this.init();
      // 绑定关闭事件
      window.setTimeout(() => {
        document.addEventListener('click', (e) => {
          e.stopPropagation();
          this.cancel();
        }, false)
      }, 500)
    },
    watch  : {
      'calendar.show' : function (show) {
        if(show){
          clearTimeout(this.initTimer);
          this.initTimer = setTimeout(()=>{
            this.init();
          }, 10)
        }
      },
      'calendar.value': function () {
        clearTimeout(this.initTimer);
        this.calendar.show && (this.initTimer = setTimeout(()=>{
          this.init();
        }, 10));
      }
    },
    methods: {
      // 补零
      zerofill(n) {
        return ('00' + n).substr(-2, 2);
      },
      init(){
        initCalendar(this.calendar);
        this.now = new Date();
        let reg  = /^ *(\d{2,4})([-\/.])([01]?\d)\2([0123]?\d)( ([012]?\d):(\d?\d):(\d?\d))? *$/;
        if (this.calendar.value && reg.test(this.calendar.value)) {
          this.calendar.sep = RegExp.$2;
          this.year         = RegExp.$1;
          this.month        = RegExp.$3 - 1;
          this.day          = RegExp.$4;
          if (this.calendar.type == "datetime" && RegExp.$5) {
            this.hour   = RegExp.$6;
            this.minute = RegExp.$7;
            this.second = RegExp.$8;
          }
        } else if (this.calendar.range) {
          let dateReg = /(\d{2,4})([-\/.])([01]?\d)\2([0123]?\d) ?~ ?(\d{2,4})\2([01]?\d)\2([0123]?\d)/;
          if (dateReg.test(this.calendar.value)) {
            this.calendar.sep        = RegExp.$2;
            this.calendar.rangeBegin = [RegExp.$1, RegExp.$3 - 1, RegExp.$4];
            this.calendar.rangeEnd   = [RegExp.$5, RegExp.$6 - 1, RegExp.$7];
          }
        } else {
          this.calendar.sep = this.calendar.sep || "/";
          this.year         = this.now.getFullYear();
          this.month        = this.now.getMonth();
          this.day          = this.now.getDate();
          this.hour         = this.zerofill(this.now.getHours());
          this.minute       = this.zerofill(this.now.getMinutes());
          this.second       = this.zerofill(this.now.getSeconds());
          if (this.calendar.range) {
            this.calendar.rangeBegin = [];
            this.calendar.rangeEnd   = [];
          }
        }
        this.monthString = this.calendar.months[this.month];
        this.render(this.year, this.month);
      },
      // 渲染日期
      render(y, m) {
        if (!this.calendar.range) {
          this.calendar.rangeBegin = [];
          this.calendar.rangeEnd   = [];
        }
        let firstDayOfMonth    = new Date(y, m, 1).getDay();
        let lastDateOfMonth    = new Date(y, m + 1, 0).getDate();
        let lastDayOfLastMonth = new Date(y, m, 0).getDate();
        this.year              = y;
        this.currentMonth      = this.calendar.months[m];
        let seletSplit         = this.calendar.value.split(" ")[0].split(this.calendar.sep);

        let i, line = 0, temp = [];
        for (i = 1; i <= lastDateOfMonth; i++) {
          let dow = new Date(y, m, i).getDay();
          if (dow == 0) {
            temp[line] = [];
          } else if (i == 1) {
            temp[line] = [];
            let k      = lastDayOfLastMonth - firstDayOfMonth + 1;
            for (let j = 0; j < firstDayOfMonth; j++) {
              temp[line].push({
                day     : k,
                disabled: true
              });
              k++;
            }
          }
          if (this.calendar.range) {
            let options = {
              day: i
            };
            if (this.calendar.rangeBegin.length > 0) {
              let beginTime = new Date(this.calendar.rangeBegin[0], this.calendar.rangeBegin[1], this.calendar.rangeBegin[2]).getTime();
              let endTime   = new Date(this.calendar.rangeEnd[0], this.calendar.rangeEnd[1], this.calendar.rangeEnd[2]).getTime();
              let thisTime  = new Date(this.year, this.month, i).getTime();
              if (beginTime <= thisTime && endTime >= thisTime) {
                options.selected = true
              }
            }
            temp[line].push(options)
          } else {
            // 单选模式
            let chk  = new Date();
            let chkY = chk.getFullYear();
            let chkM = chk.getMonth();
            if (parseInt(seletSplit[0]) == this.year && parseInt(seletSplit[1]) - 1 == this.month && parseInt(seletSplit[2]) == i) {
              // 匹配上次选中的日期
              temp[line].push({
                day     : i,
                selected: true
              });
              this.today = [line, temp[line].length - 1]
            } else if (chkY == this.year && chkM == this.month && i == this.day && this.calendar.value == "") {
              // 没有默认值的时候显示选中今天日期
              temp[line].push({
                day     : i,
                selected: true
              });
              this.today = [line, temp[line].length - 1]
            } else {
              // 设置可选范围
              let options = {
                day     : i,
                selected: false,
              };
              if (this.calendar.begin != "") {

                let beginSplit = this.calendar.begin.split(this.calendar.sep);
                let beginTime  = new Date(
                    parseInt(beginSplit[0]),
                    parseInt(beginSplit[1]) - 1,
                    parseInt(beginSplit[2])
                ).getTime();
                if (beginTime > new Date(this.year, this.month, i).getTime()) options.disabled = true
              }
              if (this.calendar.end != "") {
                let endSplit = this.calendar.end.split(this.calendar.sep);
                let endTime  = new Date(
                    parseInt(endSplit[0]),
                    parseInt(endSplit[1]) - 1,
                    parseInt(endSplit[2])
                ).getTime();
                if (endTime < new Date(this.year, this.month, i).getTime()) options.disabled = true
              }
              temp[line].push(options)
            }
          }

          // 最后一行
          if (dow == 6) {
            line++
          } else if (i == lastDateOfMonth) {
            let k = 1;
            for (dow; dow < 6; dow++) {
              temp[line].push({
                day     : k,
                disabled: true
              });
              k++;
            }
          }
        }
        this.days = temp
      },
      prev(e) {
        e.stopPropagation();
        if (this.month == 0) {
          this.month = 11;
          this.year  = parseInt(this.year) - 1
        } else {
          this.month = parseInt(this.month) - 1
        }
        this.monthString = this.calendar.months[this.month];
        this.render(this.year, this.month)
      },
      next(e) {
        e.stopPropagation();
        if (this.month == 11) {
          this.month = 0;
          this.year  = parseInt(this.year) + 1
        } else {
          this.month = parseInt(this.month) + 1
        }
        this.monthString = this.calendar.months[this.month];
        this.render(this.year, this.month)
      },
      select(k1, k2, e) {
        if (e != undefined) e.stopPropagation();
        if (this.calendar.range) {
          if (this.calendar.rangeBegin.length == 0 || this.rangeEndTemp != 0) {
            this.calendar.rangeBegin     = [this.year, this.month, this.days[k1][k2].day, this.hour, this.minute, this.second];
            this.calendar.rangeBeginTemp = this.calendar.rangeBegin;
            this.calendar.rangeEnd       = [this.year, this.month, this.days[k1][k2].day, this.hour, this.minute, this.second];
            this.rangeEndTemp            = 0
          } else {
            this.calendar.rangeEnd = [this.year, this.month, this.days[k1][k2].day, this.hour, this.minute, this.second];
            this.rangeEndTemp      = 1;
            if (+new Date(this.calendar.rangeEnd[0], this.calendar.rangeEnd[1], this.calendar.rangeEnd[2]) < +new Date(this.calendar.rangeBegin[0], this.calendar.rangeBegin[1], this.calendar.rangeBegin[2])) {
              this.calendar.rangeBegin = this.calendar.rangeEnd;
              this.calendar.rangeEnd   = this.rangeBeginTemp
            }
          }
          this.render(this.year, this.month)
        } else {
          // 取消上次选中
          if (this.today.length > 0) {
            this.days[this.today[0]][this.today[1]].selected = false
          }
          // 设置当前选中天
          this.days[k1][k2].selected = true;
          this.day                   = this.days[k1][k2].day;
          this.today                 = [k1, k2];
          if (this.calendar.type == 'date') {
            this.calendar.value = this.year + this.calendar.sep + this.zerofill(this.month + 1) + this.calendar.sep + this.zerofill(this.days[k1][k2].day)
            this.calendar.show  = false
          }
        }

      },
      ok() {
        // 只有有日期的时候才执行
        if (this.calendar.type != "time") {
          let isSelected = false;
          this.days.forEach(v=> {
            v.forEach(vv=> {
              if (vv.selected) {
                isSelected = true
              }
            })
          });
          if (!isSelected)return false
        }

        if (this.calendar.range) {
          this.calendar.value = this.output(this.calendar.rangeBegin) + " ~ " + this.output(this.calendar.rangeEnd)
        } else {
          this.calendar.value = this.output([
            this.year,
            this.month,
            this.day,
            parseInt(this.hour),
            parseInt(this.minute),
            parseInt(this.second)
          ])
        }
        this.calendar.show = false
      },
      cancel() {
        this.calendar.show = false
      },
      /**
       * 格式化输出日期
       * @param args 日期数组 [yyyy, DD, dd, HH, mm, ss]
       * @returns String
       */
      output(args) {
        if (this.calendar.type == 'time') {
          return `${this.zerofill(args[3])}:${this.zerofill(args[4])}:${this.zerofill(args[5])}`
        }
        if (this.calendar.type == 'datetime') {
          return `${args[0] + this.calendar.sep + this.zerofill(args[1] + 1) + this.calendar.sep + this.zerofill(args[2])} ${this.zerofill(args[3])}:${this.zerofill(args[4])}:${this.zerofill(args[5])}`
        }
        if (this.calendar.type == 'date') {
          return args[0] + this.calendar.sep + this.zerofill(args[1] + 1) + this.calendar.sep + this.zerofill(args[2])
        }
      }
    }
  }
</script>
 
