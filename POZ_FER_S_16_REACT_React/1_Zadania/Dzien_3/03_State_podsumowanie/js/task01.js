import React, {Component} from "react";
import ReactDOM from "react-dom";



class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            actualdate: new Date()
        }
        console.log('1' + this.state)
    }
    componentDidMount(){
        console.log('2' + this.state);
        this.intervalactualdate = setInterval(() => {
            this.setState({
                    actualdate: new Date()
            })
        }, 1000);
    }
    
    

    render(){
        class ClockTime extends Component {
            render(){
                console.log("7" + this.props.actualdate0)
                ////////////////////////////////////////
                class ClockTimeHour extends Component {
                    render(){
                        let data3 = this.props.actualdate1.getHours()
                        return(
                            <div>
                               <h3> Godzina:  {data3} </h3>
                            </div>
                        )
                    }
                }

                    /////////////////////////////////
                class ClockTimeMinute extends Component {
                    render(){
                        let data = this.props.actualdate2.getMinutes()
                        return(
                            <div>
                               <h3> Minuta:  {data} </h3>
                            </div>
                        )
                    }
                }
                //////////////////////////////////////
                class ClockTimeSecends extends Component {
                    render(){
                        let data = this.props.actualdate3.getSeconds()
                        return(
                            <div>
                               <h3> Secunda:  {data} </h3>
                            </div>
                        )
                    }
                }
                /////////////////////////////
                let data = this.props.actualdate0.toLocaleTimeString()
                ////////////////////////////////////////
                return( //return dla Clock Time
                    <div>
                        {/* <ClockTimeHour actualdate={new Date()}/>
                        <ClockTimeMinute actualdate={new Date()}/>
                        <ClockTimeSecends actualdate={new Date()}/> */}

             {/* /////////////////////////////////////////////// */}
                        <ClockTimeHour actualdate1={this.props.actualdate0}/>
                        <ClockTimeMinute actualdate2={this.props.actualdate0}/>
                        <ClockTimeSecends actualdate3={this.props.actualdate0}/>
                       <h2> Czas wariacie: {data} </h2>
                    </div>
                )
            }   
        }
        class ClockDate extends Component {
            render(){
                // console.log(this.props.actualdate)


                class ClockDateYear extends Component {
                    render(){
                        console.log(" 3 " + this.props.actualdate4)

                        let data1 = this.props.actualdate4.getFullYear()
                        return(
                            <div>
                               <h3> Rok:  {data1} </h3>
                            </div>
                        )
                    }
                }


                //////////////////////////////////////////
                class ClockDateMonth extends Component {
                    render(){

                        console.log(this.props.actualdate5)

                        let data = this.props.actualdate5.getMonth() + 1
                        return(
                            <div>
                               <h3> Miesiąc:  {data} </h3>
                            </div>
                        )
                    }
                }
                //////////////////////////////////////////
                class ClockDateDay extends Component {
                    render(){
                        let data = this.props.actualdate6.getDate() + 1
                        return(
                            <div>
                               <h3> Dzień:  {data} </h3>
                            </div>
                        )
                    }
                }
                ////////////////////////////////////////
               let data2 = this.props.actualdate7.toLocaleDateString()
                return( // return dla Clock Date
                    <div>
                          <ClockDateYear actualdate4={this.props.actualdate7}/>
                        <ClockDateMonth actualdate5={this.props.actualdate7}/>
                        <ClockDateDay actualdate6={this.props.actualdate7}/> 
                    {/* /////////////////////////////////////////////// */}
                        {/* <ClockDateYear actualdate={this.props.actualdate}/>
                        <ClockDateMonth actualdate={this.props.actualdate}/>
                        <ClockDateDay actualdate={this.props.actualdate}/>  */}
                       <h1>{data2}</h1> 
                    </div>
                )
            }
        }
        // let xd = this.state.actualdate.toLocaleTimeString()
        return( // Return dla Clock
            <div>
                {/* <ClockDate actualdate={new Date()} />
                <ClockTime actualdate={new Date()} /> */}


        {/* /////////////////////////////////////////////// */}
                <ClockDate actualdate7={this.state.actualdate} />
                <ClockTime actualdate0={this.state.actualdate} /> 
                {/* <ClockDateYear actualdate={this.state.actualdate}/> */}
                {/* {xd} */}
            </div>
        )
    }
    }
    
    
    class App extends Component {
        render(){
            return(
                <section> 
                    <Clock/> 
                   {/* <ClockTime actualdate = {new Date()} />
                   <ClockDate actualdate = {new Date()}/> */}
                </section>
            )
        }
    }
    
    ReactDOM.render(
        <App/>,
        document.querySelector("#app")
    )
    
    