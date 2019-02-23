import React,{PureComponent} from 'react'
import { connect } from 'react-redux';
import { RecomendWrapper, RecomendItem } from '../style';


class Recommend extends PureComponent {
    render() {
        return (
            <RecomendWrapper>
                {this.props.recommendList.map((item) => {
                    return (
                        <RecomendItem key={item.get('id')} imgUrl={item.get('imgUrl')}>
                        </RecomendItem>
                    )
                })}
            </RecomendWrapper>
        )
    }
}

const mapState = (state) => ({
    recommendList: state.get('home').get('recommendList')
})
export default connect(mapState, null)(Recommend);