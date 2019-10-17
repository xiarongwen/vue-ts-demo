import { Component, Vue } from 'vue-property-decorator';
import style from '../style/App.less'
@Component
export default class App extends Vue{

    public Tab:Array<String> = ['首页','我的']
           route:Array<String>  = ['/my','/Main']   
    protected render() {
      const Tab = this.Tab.map((item:String,index:any)=>{
          return(
              <router-link to={this.route[index]}> {item}</router-link>
          )
      })
      return(
          <div>
              <div class={style.tab}>
                  {Tab}
              </div>
          </div>
      );
  
    }
}