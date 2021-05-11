import React from 'react'
import { get } from '../../services/apiService'
import CardList from '../shared/CardList'
import Pagination from '../shared/Pagination'

/**
 * Main HomePage Content which mount CardList Component 
 */
class HomePage extends React.Component {
    state = {
        loading: true, // to trigger loader
        characters: [], // array of all the characters
        paginationDetails: null, // details of pagination 
        page: 1 // current page, always start with 1
    }

    componentDidMount() {
        // load the data from API
        this.loadCharacters()
    }

    // Displaying Loading on screen, us Callback function to fetch data from api
    loadCharacters() {
        this.setState({ loading: true }, () => { // set loading true first before each time we hit API,
            get(`https://rickandmortyapi.com/api/character?page=${this.state.page}`).then(data => {
                const { results, info } = data
                this.setState({ loading: false, characters: results, paginationDetails: info })
            })
        }
        )
    }

    // set page to custom number
    setPage = (page) => {
        this.setState(prevState => ({
            page: page
        }), this.loadCharacters)
    }

    // decrement page by 1
    prevPage = () => {
        this.setState(prevState => ({
            page: prevState.page - 1
        }), this.loadCharacters)
    }

    // increment page by 1
    nextPage = () => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }), this.loadCharacters)
    }


    render() {
        const { loading, characters, page, paginationDetails } = this.state
        if (loading) {
            return (<div data-testid="homePageLoader" className="lds-facebook centered"><div></div><div></div><div></div></div>)
        }
        return (
            <div className="body" data-testid="homePageComponent">
                {paginationDetails && <Pagination
                    page={page}
                    pageDetails={paginationDetails}
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    setPage={this.setPage}
                ></Pagination>}
                <CardList characters={characters}></CardList>
            </div>
        )
    }
}

export default HomePage