import React from 'react';
class SellingNow extends React.Component {
    constructor(props) {

      super(props);
      this.n = 10;
      const codes = ['us', 'gb', 'ca', 'de', 'it', 'se', 'fr', 'es', 'jp', 'pt', 'ch']
      this.countries = {us: 'United States', gb: 'United Kingdom',
    ca: 'Canada', de: 'Germany', it: 'Italy', se: 'Sweden',
    fr: 'France', es: 'Spain', jp: 'Japan', pt: 'Portugal', ch: 'Switzerland'}
      this.allAlbums = this.props.albums.sort(
        () => Math.random() - .5);
    this.allAlbums.forEach(album => {
        let flagIdx = Math.floor(
            Math.random()**3 * this.allAlbums.length
        )%codes.length;
        console.log(flagIdx);
        album['country'] = codes[flagIdx];
    });
        
        this.state = { idx: 0, width: 0}
        this.rotate = this.rotate.bind(this);
        this.idx = 0;
        this.testRef = React.createRef();

    }

    componentDidMount(){
        this.rotate();
    }

    linkToShow(album){
        return () => {
            this.props.history.push({pathname: `/band/${album.band_id}`,
        state: {albumId: album.id}});}
  
    }
      

    rotate(){
        let {idx} = this.state;
        let timeGap = Math.random()*3;
        this.setState({idx: idx - 1, timeGap},
            () => {
                for(let i = 0; i<this.n; i++ ){
                }
                setTimeout(()=>this.rotate(), timeGap * 1000)});
    }
    
    handleClick(album){
        this.props.history.push({pathname: `/band/${album.band_id}`,
        state: {albumId: album.id}});   
    }

    render(){
            let allAlbums = this.allAlbums;
            const l = allAlbums.length;
            const idx = this.state.idx;
            const indices = new Array(this.n);
            const start = (idx % l) + l-1;
            for (let i=0; i<this.n; i++){
                indices[i] = (start + i)%(allAlbums.length);
             }
             const albums = indices.map(i => allAlbums[i]);
             albums[1].timeLength = 0.1;
             for(let i= 2; i< albums.length; i++ ){
                 let alb = albums[i];
              alb.timeLength = 
                alb.timeLength ? alb.timeLength + this.state.timeGap
                : this.state.timeGap + i}

             const arr = ['zero', 'one'];
        return (
            <div>
            <div className = 'row'>
                <div className='splash-section-header'>Selling Right Now</div>
            </div>
        <div className = "carousel">
            {albums.map((alb, i) => {
                     const time = Math.ceil(alb.timeLength);
                     const timeStr = time + (time === 1 ? ' second ago' : ' seconds ago');
                    return <div key={idx + i} className = {`carousel-item${i<2 ? ` ${arr[i]}` : ''}`}
                 >
                    <img src={alb.photoUrl} className='carousel-img'/>
                    <div style={{fontWeight: "bold"}}>{alb.name}</div>
                    <div>by {alb.band.band_name}</div>
                    {i > 0 ? <div className='ellipsis'> in <span className=
                    {`flag flag-${alb.country}`}></span> 
                    {` ${this.countries[alb.country]}`}
                        </div>: null}
                    <div className='time-log'>
                   {timeStr}</div>
            </div>})}
        </div>
        </div>)
    }
}

export default SellingNow;