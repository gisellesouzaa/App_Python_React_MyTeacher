import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Logo } from './Menu.style';
import Link from 'next/link';

export default function AccountMenu() {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', bgcolor: 'background.paper', background: '#d1ecd1', justifyContent: 'space-between', padding: '20px'}}>
                <Logo src="/images/myteacher.png" />
                <Container sx={{ display: 'flex', alignItems: 'center', textAlign: 'center'}}> 
                    <Typography sx={{ minWidth: 100 }}>
                        <Link href='/'>Home</Link>
                    </Typography>

                    <Typography sx={{ minWidth: 100 }}>
                        <Link href='/aulas'>Agendamentos</Link>
                    </Typography>
                </Container>
            </Box>
        </React.Fragment>
    );
}