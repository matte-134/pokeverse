import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { CardGrid } from './components/CardGrid';
import { Search } from './components/Search';
import { useEffect } from 'react';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
}

export { App };
