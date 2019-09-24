import React from 'react';
class Notables extends React.Component {
    constructor(props) {
        super(props);
        const names = ["Pushing Through The Pavement",
            "Wake Up", "...Plays Guitar", "Wild & You",
            "Broken Parts"]
        const genres = ['groove', 'electropop',
            'classical', 'folk', 'synthwave']
        let note3 = "German guitarist Gillicuddy offers a ";
        note3 += "pensive collection of solo pieces, understated but confidently present."
        let note1 = "A smooth, groovy album from The Polish Ambassador ";
        note1 += "featuring talented guest vocals."
        let note2 = "Jahzzar makes an homage to the synthy pop sounds of the 80's."
        let note4 = "The second album of 'countryside lullabies' from the Icelandic duo."
        let note5 = "A cinematic mix of dubstep, trance, and synthwave."
        const notes = [note1, note2, note3, note4, note5];
        this.state = {
            names, genres, notes
        }
    }
    // componentDidMount(){
    //     this.props.fetchAllAlbums();
    // }

    handleClick(album) {
        this.props.history.push({
            pathname: `/band/${album.band_id}`,
            state: { albumId: album.id }
        });
    }

    render() {
        const albums = this.props.albums;
        let fave_five = [];
        let { names } = this.state;
        for (let i = 0; i <= 4; i++) {
            let album = albums.find(alb => alb.name === names[i]);
            if (!album) return <div></div>;
            fave_five.push(album);
        }
        return (
            <div className='nn'>
                <div className='row'>
                    <div className='splash-section-header'> New and Notable</div>
                </div>
                <div className='fave-5'>

                    {fave_five.map((faveAlb, i) => (
                        <div className={'fave-single-wrapper' + (i === 0 ? 1 : '')}
                            key={i} >
                            <img src={faveAlb.photoUrl} onClick={() => this.handleClick(faveAlb)} />
                            <div className='fave-title-and-band'>
                                <div className='fave-title' onClick={() => this.handleClick(faveAlb)}> {faveAlb.name} </div>
                                <div className='fave-band-name' onClick={() => this.handleClick(faveAlb)}> by {faveAlb.band.band_name} </div>
                            </div>
                            <p className='fave-genre'>{this.state.genres[i]}</p>
                            <p className='fave-note'>{this.state.notes[i]}</p>
                        </div>
                    ))}
                </div>
            </div>)
    }
}

export default Notables;