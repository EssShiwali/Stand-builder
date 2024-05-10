import { GoPlus } from "react-icons/go";
import './Navbar.css'
const dropList = () => {
    return (
        <div className="dropdown-content">

            <input type="checkbox" className="inner-drop" id='usa' />
            <label htmlFor="usa"><a>United States <GoPlus className='rotate2' /></a> </label>
            <div className="inner-list usaList">
                <div className="inner-cities">
                    <span>ANAHEIM</span>
                    <span>ATLANTIA</span>
                    <span>AUSTIN</span>
                    <span>BOSTON</span>
                    <span>CHICAGO</span>
                    <span>DALLAS</span>
                    <span>DENVER</span>
                    <span>DETROIT</span>
                    <span>HOLLYWOOD</span>
                    <span>HOUSTON</span>
                    <span>LAS VEGAS</span>
                    <span>LONG BEACH</span>
                    <span>LOS ANGELES</span>
                    <span>LOUISVILLE</span>
                    <span>MIAMI</span>
                    <span>NEW YORK</span>
                    <span>ORLANDO</span>
                    <span>PALM BEACH</span>
                    <span>PITTSBURGH</span>
                    <span>SAN ANTONIO</span>
                    <span>SAN DIEGO</span>
                    <span>SAN FRANCISCO</span>
                    <span>SAN JOSE</span>
                    <span>TEXAS</span>
                    <span>WASHINGTON DC</span>
                    <span>NEW ORLEANS</span>
                    <span>UTAH</span>
                    <span>MICHIGAN</span>
                    <span>ALASKA</span>
                    <span>GEORGIA</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='uk' />
            <label htmlFor="uk"><a>United Kingdom <GoPlus className='rotate2' /></a></label>
            <div className="inner-list ukList">
                <div className="inner-cities">
                    <span>BOLOGNA</span>
                    <span>FLORENCE</span>
                    <span>GENOA</span>
                    <span>MILAN</span>
                    <span>PARMA</span>
                    <span>RIMNI</span>
                    <span>ROME</span>
                    <span>VERONA</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='uae' />
            <label htmlFor="uae"><a>UAE <GoPlus className='rotate2' /></a></label>
            <div className="inner-list uaeList">
                <div className="inner-cities">
                    <span>DUBAI</span>
                    <span>ABU DHABI</span>
                    <span>SHARJAH</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='germany' />
            <label htmlFor="germany"><a>Germany <GoPlus className='rotate2' /></a></label>
            <div className="inner-list germanyList">
                <div className="inner-cities">
                    <span>frankfurt</span>
                    <span>stuttgart</span>
                    <span>berlin</span>
                    <span>bonn</span>
                    <span>cologne</span>
                    <span>dortmund</span>
                    <span>dusseldorf</span>
                    <span>essen</span>
                    <span>friedrichshafen</span>
                    <span>hamburg</span>
                    <span>hannover</span>
                    <span>karlsruhe</span>
                    <span>leipzig</span>
                    <span>munich</span>
                    <span>nuremberg</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='france' />
            <label htmlFor="france"><a>france <GoPlus className='rotate2' /></a></label>
            <div className="inner-list franceList">
                <div className="inner-cities">
                    <span>cannes</span>
                    <span>lyon</span>
                    <span>nice</span>
                    <span>paris</span>
                    <span>strasbourg</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='italy' />
            <label htmlFor="italy"><a>italy <GoPlus className='rotate2' /></a></label>
            <div className="inner-list italyList">
                <div className="inner-cities">
                    <span>bologna</span>
                    <span>florence</span>
                    <span>genoa</span>
                    <span>milan</span>
                    <span>parma</span>
                    <span>rimni</span>
                    <span>rome</span>
                    <span>verona</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='switzerland' />
            <label htmlFor="switzerland"><a>switzerland <GoPlus className='rotate2' /></a></label>
            <div className="inner-list switzerlandList">
                <div className="inner-cities">
                    <span>bern</span>
                    <span>geneva</span>
                    <span>lugano</span>
                    <span>zurich</span>
                    <span>basel</span>
                    <span>sirnach</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='netherlands' />
            <label htmlFor="netherlands"><a>netherlands <GoPlus className='rotate2' /></a></label>
            <div className="inner-list netherlandsList">
                <div className="inner-cities">
                    <span>amsterdam</span>
                    <span>maastricht</span>
                    <span>rotterdam</span>
                    <span>utrecht</span>
                    <span>vijfhuizen</span>
                </div>
            </div>


            <input type="checkbox" className="inner-drop" id='spain' />
            <label htmlFor="spain"><a>spain <GoPlus className='rotate2' /></a></label>
            <div className="inner-list spainList">
                <div className="inner-cities">
                    <span>alicante</span>
                    <span>barcelona</span>
                    <span>bilbao</span>
                    <span>jaen</span>
                    <span>madrid</span>
                    <span>malaga</span>
                    <span>palma de mallorca</span>
                    <span>seville</span>
                    <span>valencia</span>
                    <span>valladolid</span>
                    <span>vigo</span>
                    <span>zaragoza</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='belgium' />
            <label htmlFor="belgium"><a>belgium <GoPlus className='rotate2' /></a></label>
            <div className="inner-list belgiumList">
                <div className="inner-cities">
                    <span>brussels</span>
                    <span>kortrijk</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='indonesia' />
            <label htmlFor="indonesia"><a>indonesia <GoPlus className='rotate2' /></a></label>
            <div className="inner-list indonesiaList">
                <div className="inner-cities">
                    <span>jakarta</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='brazil' />
            <label htmlFor="brazil"><a>brazil <GoPlus className='rotate2' /></a></label>
            <div className="inner-list brazilList">
                <div className="inner-cities">
                    <span>belo horizonte</span>
                    <span>brasilia</span>
                    <span>campinas</span>
                    <span>caxias do sul</span>
                    <span>curitiba</span>
                    <span>florianopolis</span>
                    <span>fortaleza</span>
                    <span>goiania</span>
                    <span>joinville</span>
                    <span>recife</span>
                    <span>rio de janerio</span>
                    <span>salvador</span>
                    <span>sao paulo</span>
                    <span>ribeirao preto</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='india' />
            <label htmlFor="india"><a>india <GoPlus className='rotate2' /></a></label>
            <div className="inner-list indiaList">
                <div className="inner-cities">
                    <span>ahemdabad</span>
                    <span>bangalore</span>
                    <span>mumbai</span>
                    <span>new delhi</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='russia' />
            <label htmlFor="russia"><a>russia <GoPlus className='rotate2' /></a></label>
            <div className="inner-list russiaList">
                <div className="inner-cities">
                    <span>moscow</span>
                    <span>st petersburg</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='singapore' />
            <label htmlFor="singapore"><a>singapore <GoPlus className='rotate2' /></a></label>
            <div className="inner-list singaporeList">
                <div className="inner-cities">
                    <span>singapore</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='sKorea' />
            <label htmlFor="sKorea"><a>South Korea <GoPlus className='rotate2' /></a></label>
            <div className="inner-list sKoreaList">
                <div className="inner-cities">
                    <span>seoul</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='iran' />
            <label htmlFor="iran"><a>iran <GoPlus className='rotate2' /></a></label>
            <div className="inner-list iranList">
                <div className="inner-cities">
                    <span>tehran</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='kuwait' />
            <label htmlFor="kuwait"><a>kuwait <GoPlus className='rotate2' /></a></label>
            <div className="inner-list kuwaitList">
                <div className="inner-cities">
                    <span>kuwait city</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='qatar' />
            <label htmlFor="qatar"><a>qatar <GoPlus className='rotate2' /></a></label>
            <div className="inner-list qatarList">
                <div className="inner-cities">
                    <span>doha</span>
                </div>
            </div>
            <input type="checkbox" className="inner-drop" id='saudi' />
            <label htmlFor="saudi"><a>saudi arabia <GoPlus className='rotate2' /></a></label>
            <div className="inner-list saudiList">
                <div className="inner-cities">
                    <span>jeddah</span>
                    <span>riyadh</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='turkey' />
            <label htmlFor="turkey"><a>turkey <GoPlus className='rotate2' /></a></label>
            <div className="inner-list turkeyList">
                <div className="inner-cities">
                    <span>istanbul</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='australia' />
            <label htmlFor="australia"><a>australia <GoPlus className='rotate2' /></a></label>
            <div className="inner-list australiaList">
                <div className="inner-cities">
                    <span>melbourne</span>
                    <span>sydney</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='canada' />
            <label htmlFor="canada"><a>canada <GoPlus className='rotate2' /></a></label>
            <div className="inner-list canadaList">
                <div className="inner-cities">
                    <span>montreal</span>
                    <span>toronto</span>
                    <span>vancouver</span>
                </div>
            </div>

            <input type="checkbox" className="inner-drop" id='thailand' />
            <label htmlFor="thailand"><a>thailand <GoPlus className='rotate2' /></a></label>
            <div className="inner-list thailandList">
                <div className="inner-cities">
                    <span>bangkok</span>
                    <span>khon kaen</span>
                </div>
            </div>
            </div>
   
    )
}

export default dropList