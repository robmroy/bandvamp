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
        this.eight = new Array(this.n);
        for(let i=0; i< this.n; i++){
            this.eight[i] = React.createRef();
        }
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
        // console.log(this.idx);
        this.setState({idx: idx - 1},
            () => {
                for(let i = 0; i<this.n; i++ ){
                    this.eight[i].current.style.left = i*100 + 100
                }
                // this.testRef.current.left = idx +'px';
                setTimeout(()=>this.rotate(), 1000)});
        // this.idx = this.idx + 100;
        // this.testRef.current.style.left = this.idx +'px';
        // setTimeout(()=>this.rotate(), 1000);
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
             const arr = ['zero', 'one']
        return (
        <div className = "carousel">
            {albums.map((alb, i) => 
                <div key={idx + i} className = {`carousel-item${i<2 ? ` ${arr[i]}` : ''}`}
                ref={this.eight[i]} >
                    <img src={alb.photoUrl} className='carousel-img'/>
                    <div style={{fontWeight: "bold"}}>{alb.name}</div>
                    <div>by {alb.band.band_name}</div>
                    {i > 0 ? <div className='ellipsis'> in <span className=
                    {`flag flag-${alb.country}`}></span> 
                    {` ${this.countries[alb.country]}`}
                        </div>: null}
                    </div>)}
        </div>)
    }
}

export default SellingNow;