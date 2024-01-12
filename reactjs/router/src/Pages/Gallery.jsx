import React from 'react';
import NavBar from '../Components/NavBar';

const Gallery = () => {
    // Define an array of image file paths (you can add up to 10 images)
    const imagePaths = [
        'https://picsum.photos/id/237/500/300',
        'https://picsum.photos/id/238/500/300',
        'https://picsum.photos/id/239/500/300',
        'https://picsum.photos/id/240/500/300',
        'https://picsum.photos/id/241/500/300',
        'https://picsum.photos/id/242/500/300',
        'https://picsum.photos/id/243/500/300',
        'https://picsum.photos/id/244/500/300',
        'https://picsum.photos/id/245/500/300',
        'https://picsum.photos/id/246/500/300',
        'https://picsum.photos/id/247/500/300',
    ];

    return (
        <>
            <NavBar />
            <div className="bg-gray-100">
                <header className="bg-blue-500 text-white py-4">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-bold">Gallery</h1>
                    </div>
                </header>

                <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {imagePaths.map((imagePath, index) => (
                        <div key={index} className="m-2">
                            <img src={imagePath} alt={`Image ${index + 1}`} className="w-full h-auto rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;
