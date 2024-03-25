import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class FetchStudioData extends Component {
    static displayName = FetchStudioData.name;

    constructor(props) {
        super(props);
        this.state = { studioItems: [], loading: true, message: '' };
    }

    componentDidMount() {
        this.populateStudioItems();
    }

    static renderStudioItemsTable(studioItems) {
        return (
            <div>
                <table className="table table-striped" aria-labelledby="tableLabel">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studioItems.map(item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <Link to={`/studio-item-detail/${item.id}`} className="btn btn-primary">Details</Link>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchStudioData.renderStudioItemsTable(this.state.studioItems);

        return (
            <div>
                <h1 id="tableLabel">Studio Items</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
                <p>{this.state.message}</p>
            </div>
        );
    }

    async populateStudioItems() {
        const response = await fetch('https://localhost:5001/peoplespartnership/api/studioitem/GetAll');
        const data = await response.json();
        this.setState({ studioItems: data.data, loading: false, message: data.message });
    }
}
