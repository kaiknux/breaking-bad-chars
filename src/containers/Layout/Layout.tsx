import React, { Component } from './node_modules/react';

interface Repository {
    id: number
    name: string
}

interface Props {
    repositories: Repository[]
}

interface state {
    newRepository?: string;
}


export default class layout extends Component<Props, state> {

    state = {
        newRepository: '',

    }
    componentDidMount () {}

    render() {

        const { repositories } = this.props;
        const { newRepository } = this.state;

        return (
            <ul>
                {repositories.map(repository => <li>{repository.name}</li>)}
            </ul>
        )
    }
}

//estrutura de classe padrão