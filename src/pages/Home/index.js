import React from 'react';
import Filme from '../../components/Filme'
const Home = () => {

const listaFilmes = [
    {nome: 'Filme 1', ano: 2020, cateforia: 'Terror'},
    {nome: 'Filme 2', ano: 2021, cateforia: 'Terror'},
    {nome: 'Filme 3', ano: 2022, cateforia: 'Terror'},
    {nome: 'Filme 4', ano: 2023, cateforia: 'Terror'},
    {nome: 'Filme 5', ano: 2024, cateforia: 'Terror'}
]

    return (
        <div className="container">
            <br/>
            <h1>Lista Filmes</h1>
            <br/>
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Nome</th>
                <th scope="col">Categoria</th>
                <th scope="col">Ano</th>
                <th scope="col" className="text-right">Acoes</th>
                </tr>
            </thead>
            <tbody>

            {listaFilmes.map(filme => (<Filme filme={filme}/>))}
              
            </tbody>
            </table>
        </div>
    );
}

export default Home;