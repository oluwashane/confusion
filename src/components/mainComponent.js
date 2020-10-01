import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './dishDetailComponent';
import About from './aboutComponent';
import Menu from './menuComponent';
import Footer from './FooterComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreator'
import { actions } from 'react-redux-form'

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
})

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes()
        this.props.fetchComments()
        this.props.fetchPromos()
    }

    render() {
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
                dishesLoading = {this.props.dishes.isLoading}
                dishesErrMess = {this.props.dishes.errormessage}
                promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]} 
                promosLoading = {this.props.promotions.isLoading}
                promosErrMess = {this.props.promotions.errorMessage}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
            )
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId))[0]} 
                    isLoading = {this.props.dishes.isLoading}
                    errMess = {this.props.dishes.errormessage}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId))}
                    commentsErrMess = {this.props.comments.errorMessage}
                    addComment={this.props.addComment}

                />
            )
        }

        const AboutUs = () => {
            return (
                <About leaders={this.props.leaders} />
            )
        }

        return (
        <div>
            <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes.dishes} isLoading={this.props.dishes.isLoading} errormessage={this.props.dishes.errormessage}/>} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Redirect to="/home" />
                </Switch>
            <Footer />
        </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
