import React, {Component} from 'react'
import { Tabs,Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl'


class Project extends Component {
    constructor(props){
        super(props)
        this.state = {activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0) {
            return(
               
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>React/Redux with Rails Backend</CardTitle>
                <CardText>
                Real Estate application showing relevant data for buyers and sellers via searchable listings and forms to capture user data for storing in Rails API.
                </CardText>
                <CardActions border>
                <Button colored > <a href= "https://github.com/Thisforbliss/react-real-estate-app-frontend" target="_blank" rel="noopener noreferrer"> GITHUB Frontend </a></Button>
                <Button colored > <a href= "https://github.com/Thisforbliss/react-real-estate-app-backend" target="_blank" rel="noopener noreferrer"> GITHUB Backend</a></Button>

                <Button colored> <a href= "https://react-real-estate-app-frontend.vercel.app/" target="_blank" rel="noopener noreferrer"> LIVE Demo Without Backend Live</a> </Button>
               
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>

            )   
                } else if (this.state.activeTab === 1){
            return(
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>JavaScript with Rails Backend</CardTitle>
                <CardText>
                Devised blogging application coupled with filters to find specific blogs by title.
                </CardText>
                <CardActions border>
                <Button colored > <a href= "https://github.com/Thisforbliss/javaProject" target="_blank" rel="noopener noreferrer" > GITHUB Frontend </a></Button>
                <Button colored > <a href= "https://github.com/Thisforbliss/jsBackend" target="_blank"rel="noopener noreferrer"  > GITHUB Backend </a></Button>
                <Button colored>LIVE DEMO</Button>
               
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
            )
                } else if (this.state.activeTab === 2){
            return(
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>Rails Project</CardTitle>
                <CardText>
                Generated application for realtors to show listings with filters to properties of a specific price range for buyers to view.
                </CardText>
                <CardActions border>
                <Button colored > <a href= "https://github.com/Thisforbliss/cityspots_test" target="_blank" rel="noopener noreferrer" > GITHUB </a></Button>
                <Button colored>LIVE DEMO</Button>
               
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 3){
            return(
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg) center / cover'}}>React Project</CardTitle>
                <CardText>
                Fully functional website with its own custom domain where homeowners can submit their property information to recieve a real cash quote on their house.
                </CardText>
                <CardActions border>
                <Button colored > <a href= "https://github.com/Thisforbliss/thisforblissrealestate" target="_blank" rel="noopener noreferrer" > GITHUB </a></Button>
                <Button colored> <a href= "https://tfbhomeoffers.com " target="_blank" rel="noopener noreferrer" > LIVE Website</a></Button>
               
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
            )
               
            
        }
    }

    render() {
        return(
            <div className= "category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React/Redux/Rails</Tab>
                    <Tab>Javascript/Rails</Tab>
                    <Tab>Rails</Tab>
                    <Tab>Real Estate Website</Tab>
                   
                   
                </Tabs>
                <section className="projects-grid">
                    <Grid className= "projects-grid"> 
                        <Cell col ={12}>
                            <div className ="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                  
                    
                </section>
            </div>
        )
    }
}

export default Project