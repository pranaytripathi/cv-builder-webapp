import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Summary from '@/components/Summary';
import ContainerLayout from '@/layouts/ContainerLayout';
import React, { useState } from 'react';

export default function Details () {
    return <ContainerLayout>
                <Header />
                <Summary />
                <Experience />
            </ContainerLayout>
};