import React, { Component } from 'react';

export class StudioItemDetail extends Component {
    static displayName = StudioItemDetail.name;

    constructor(props) {
        super(props);
        this.state = { studioItem: {}, loading: true };
    }

    async componentDidMount() {
        const { match } = this.props;
        const { params } = match || {};
        const { id } = params || {};
        await this.populateStudioItem(id);
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderStudioItemDetail(this.state.studioItem);

        return (
            <div>
                <h1>Studio Item Detail</h1>
                {contents}
            </div>
        );
    }

    async populateStudioItem(id) {
        const response = await fetch(`https://localhost:5001/peoplespartnership/api/studioitem/GetById/${id}`);
        const data = await response.json();
        this.setState({ studioItem: data.data, loading: false });
    }

    renderStudioItemDetail(studioItem) {
        return (
            <div>
                <h2>{studioItem.name}</h2>
                <p>Description: {studioItem.description}</p>
                <p>Acquired: {studioItem.acquired}</p>
                <p>Sold: {studioItem.sold}</p>
            </div>
        );
    }
}
