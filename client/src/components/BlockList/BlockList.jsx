import React from 'react'
import BlockCard from '../BlockCard/BlockCard';
import styles from "./BlockList.module.css"
const BlockList = ({blocks}) => {
    return (
        <div className={styles.container}>
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