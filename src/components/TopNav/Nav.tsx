import { Component, Vue,Prop } from 'vue-property-decorator';
import style from './style/NavStyle.module.less'
@Component

export default class App extends Vue{

    @Prop({ required: false })
    public title?: string;

    public back(){
        this.$router.go(-1);
    }
    protected render(){
      return(
          <div>
              <div class={style.topNav}>
                {/* 返回上一页按钮 */}
                <div class={style.back} onClick={this.back}> 上一页 </div>
                <div class={style.title}>
                    猫眼电影
                    {this.title}
                </div>
              </div>
          </div>
      );
  }
}