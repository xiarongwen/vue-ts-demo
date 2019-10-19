// 入口文件
import { Component, Vue } from 'vue-property-decorator';
import style from './style/App.less'
import Tab from './components/Tab/Tab'
import My from './view/my/my'

import TopNav from './components/TopNav/Nav'
@Component 
export default class App extends Vue {

  protected render() {
    return(
        <div>
            <TopNav></TopNav>
            <router-view></router-view>
            <Tab></Tab>
        </div>
    );

  }
}