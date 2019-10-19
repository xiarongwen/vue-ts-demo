import { Component, Vue } from 'vue-property-decorator';
import style from './style/Tab.module.less'
@Component
export default class App extends Vue {

    public arr: Array<Object> = [
        { name: '电影', path: '/My', icon: 'icon' },
        { name: '影院', path: '/Main', icon: 'icon' },
        { name: '我的', path: '/mine', icon: 'icon' }
    ]
    protected render() {

        const Tab = this.arr.map((item: Object, index: any) => {
            return (
                <router-link class={style.tabs} to={item.path}>{item.name}</router-link>
            )
        })
        return (
            <div>
                <div class={style.tab}>
                    {Tab}
                </div>
            </div>
        );

    }
}