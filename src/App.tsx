// 入口文件
import { Component, Vue } from 'vue-property-decorator';
import style from './style/App.less'
import Tab from './components/Tab'
@Component 
export default class App extends Vue {

  protected render() {
    return(
        <div>
            <router-view></router-view>
            <Tab></Tab>
        </div>
    );

  }
}