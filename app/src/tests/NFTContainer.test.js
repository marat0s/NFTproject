import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NFTContainer from '/app/src/NFTContainer';

describe('<NFTContainer />', () => {
    it('renders a list of NFTs', () => {
        const nftsMock = [
            {
                meta: {
                    content: [{ url: 'mockURL1' }],
                    name: 'mockName1',
                    description: 'mockDescription1'
                },
                contract: 'mockContract1'
            },
            {
                meta: {
                    content: [{ url: 'mockURL2' }],
                    name: 'mockName2',
                    description: 'mockDescription2'
                },
                contract: 'mockContract2'
            }
        ];

        const { getAllByText } = render(<NFTContainer nfts={nftsMock} />);

        expect(getAllByText('Contract Address:').length).toBe(2);
        expect(getAllByText(/mockContract/).length).toBe(2);
    });
});
