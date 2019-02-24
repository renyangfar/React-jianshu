import React from 'react'
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom';

class Detail extends React.PureComponent {

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
    render() {
        console.log();
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{ __html: this.props.content }}></Content>
            </DetailWrapper>
        )
    }

};

const mapState = (state) => ({
    title: state.get('detail').get('title'),
    content: state.get('detail').get('content')
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));