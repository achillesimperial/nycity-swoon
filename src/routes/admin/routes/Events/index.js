import React, { Component } from 'react';
import Events from './Events';
import Image from '../../../../assets/images/jade.png';

const fetchEvents = [
    {
        uuid: '81ddfb3f-46c7-442c-83e6-ee946cfa4366',
        title: 'Sanctum Sanctorum',
        images: [Image, Image, Image],
        venue: {
            address: {
                name: 'Jade',
                street: '177a Bleecker St.',
                city: 'New York',
                state: 'NY',
                zipcode: '10012'
            },
            maxOccupacy: 100,
            availableTwoTops: 20,
            barSeating: 30,
        },
        date: '10/13/19',
        timeStart: '3:00pm',
        timeEnd: '10:00pm',
        attendees: {
            men: [ 
                { uuid: '69f843f0-1fea-46e9-8ab8-9b5d911f7d79'}
            ],
            women: [ 
                { uuid: 'b2ef3dab-3229-4d79-8439-5800d799cd3f'}
            ],
        },

    },
    {
        uuid: 'da9b8207-0123-42d4-85a2-9e10068bdac5',
        title: 'Sanctum Sanctorum',
        images: [Image, Image, Image],
        venue: {
            address: {
                name: 'Jade',
                street: '177a Bleecker St.',
                city: 'New York',
                state: 'NY',
                zipcode: '10012'
            },
            maxOccupacy: 100,
            availableTwoTops: 20,
            barSeating: 30,
        },
        date: '10/13/19',
        timeStart: '3:00pm',
        timeEnd: '10:00pm',
        attendees: {
            men: [ 
                { uuid: '69f843f0-1fea-46e9-8ab8-9b5d911f7d79'}
            ],
            women: [ 
                { uuid: 'b2ef3dab-3229-4d79-8439-5800d799cd3f'}
            ],
        },

    },
    {
        uuid: 'bc5b5ce6-3709-4c4f-86b4-132847ff6a89',
        title: 'Sanctum Sanctorum',
        images: [Image, Image, Image],
        venue: {
            address: {
                name: 'Jade',
                street: '177a Bleecker St.',
                city: 'New York',
                state: 'NY',
                zipcode: '10012'
            },
            maxOccupacy: 100,
            availableTwoTops: 20,
            barSeating: 30,
        },
        date: '10/13/19',
        timeStart: '3:00pm',
        timeEnd: '10:00pm',
        attendees: {
            men: [ 
                { uuid: '69f843f0-1fea-46e9-8ab8-9b5d911f7d79'}
            ],
            women: [ 
                { uuid: 'b2ef3dab-3229-4d79-8439-5800d799cd3f'}
            ],
        },

    },
    {
        uuid: '3b990420-006f-42f9-b2b3-d527efcb1967',
        title: 'Sanctum Sanctorum',
        images: [Image, Image, Image],
        venue: {
            address: {
                name: 'Jade',
                street: '177a Bleecker St.',
                city: 'New York',
                state: 'NY',
                zipcode: '10012'
            },
            maxOccupacy: 100,
            availableTwoTops: 20,
            barSeating: 30,
        },
        date: '10/13/19',
        timeStart: '3:00pm',
        timeEnd: '10:00pm',
        attendees: {
            men: [ 
                { uuid: '69f843f0-1fea-46e9-8ab8-9b5d911f7d79'}
            ],
            women: [ 
                { uuid: 'b2ef3dab-3229-4d79-8439-5800d799cd3f'}
            ],
        },

    }
]
class EventsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: fetchEvents,
        } 
    }
    render() {
        return (
            <div>
                <Events events={this.state.events}/>
            </div>
        );
    }
}

export default EventsContainer;