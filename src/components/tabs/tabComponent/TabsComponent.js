import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTab = styled(Tab)(({ theme, selected }) => ({
    color: selected ? '#000 !important' : '#FFF !important',
    backgroundColor: selected ? '#FFF' : '#333',
    textTransform: 'none',
    padding: '10px 18px !important',
    fontSize: '12px',
    fontWeight: 'normal',
    marginRight: '12px',
    borderRadius: '30px',
    minWidth: 'auto', 
    minHeight: 'auto', 
    height: '34px',
  }));

export default function TabsComponent({dataFilter}) {
    const [selectedFilter, setSelectedFilter] = useState('track,artist,album,playlist,show,episode');

        
    // Manipulador de mudança de filtro e Passando o valor do filtro para o componente pai
    const handleFilterChange = (event, newValue) => {
        setSelectedFilter(newValue);
        dataFilter(newValue);
    };

    return (
        /*Filtro dos campos de busca */
        <Box sx={{padding: '8px'}}>
            <Tabs
                value={selectedFilter}
                onChange={handleFilterChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                    '& .MuiTabs-indicator': {
                        display: 'none', // Remover o indicador
                    },
                    display: 'flex', 
                    width: 'max-content',
                    height: 'max-content'
                }}
            >
                <CustomTab label="Tudo" value="track,artist,album,playlist,show,episode"/>
                <CustomTab label="Músicas" value="track" />
                <CustomTab label="Artistas" value="artist" />
                <CustomTab label="Álbuns" value="album" />
                <CustomTab label="Playlists" value="playlist" />
                <CustomTab label="Podcasts e programas" value="show,episode" />
            </Tabs>

            {/* Renderização condicional dos resultados */}
            <Box sx={{ marginTop: '10px' }}>
            </Box>
        </Box>
    );
}
