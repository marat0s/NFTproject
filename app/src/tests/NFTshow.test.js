import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NFTshow from '/app/src/NFTshow.js';

describe('<NFTshow />', () => {
    it('renders without crashing', () => {
        const nftMock = {
            meta: {
                content: [{ url: 'mockURL' }],
                name: 'mockName',
                description: 'mockDescription'
            },
            contract: 'mockContract'
        };

        const { getByText } = render(<NFTshow nft={nftMock} />);

        expect(getByText('Contract Address:')).toBeInTheDocument();
        expect(getByText('mockContract')).toBeInTheDocument();
        expect(getByText('NFT Name:')).toBeInTheDocument();
        expect(getByText('mockName')).toBeInTheDocument();
        expect(getByText('Collection Description:')).toBeInTheDocument();
        expect(getByText('mockDescription')).toBeInTheDocument();
    });
});
