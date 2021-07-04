import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {

  
  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pancakes',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burrito',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burger',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green river',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Docks',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);// set initial state to false because we don't want the modal to open without user input
  const currentPhotos = photos.filter((photo) => photo.category === category);// go through each 'photo' in 'photos' array, if photo.category matches category( that we chose), return that photo to 'currentPhotos' array
  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    // current photo
    setCurrentPhoto({...image, index: i});// update the currentPhoto state with the data retreived from the click event
    setIsModalOpen(true);
  }
  return (
    <div>
      {/* open the modal if the isModalOpen state= true and set it to false via toggleModal() upon closing the modal */}
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">          
        {currentPhotos.map((image, i) => (// i = the index number of the current .map loop
                                          // image is the object from the the currentPhotos array
            // a dynamic require (ie a require in a loop like .map) returns a sorta promise which doesn't resolve immediately
            // Hence without the .default it is still a module and not the expected data, that is why we need the .default at the end
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}// the photos have the same name as the loop index, so we use the latter
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}// asign the toggleModal function to handle click events, pass image (current element in the photos array) and i
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};


// The alt attribute is used for accessibility user-assistance devices, such as screen readers, so the image's name was assigned.

// The key attribute was also assigned the image's name. This attribute value must be a unique string. The absence 
// of this unique key value will cause an error message. For more information about using the key attribute, refer to 
// the React documentation on lists and keys (Links to an external site.).

// src was assigned the require expression. Though this isn't a common practice, it certainly has its use cases! 
// We were also able to take advantage of the incremental naming of the images by using i.

export default PhotoList;