import React from 'react'
import BlockCard from './BlockCard';

const BlockList = ({blocks}) => {
    return (
        <div>
          {blocks.map(block => (
            <BlockCard
              key={block.id}
              block={block}
            />
          ))}
        </div>
      );
}

export default BlockList