import React from 'react';
import NavBar from '../Components/NavBar';

const Home = () => {
    return (
        <>
            <NavBar />
            <>
                <div
                    className="py-20 bg-cover bg-no-repeat bg-fixed"
                    style={{
                        backgroundImage:
                            "url(https://media.vanityfair.com/photos/5ce426151c0b0773cacd1121/master/pass/star-wars-feature-vf-2019-summer-embed-05.jpg)"
                    }}
                >
                    <div className="container m-auto text-center px-6 opacity-100">
                        <h2 className="text-4xl font-bold mb-2 text-white">
                            Echo Base...I've got something!
                        </h2>
                        <h3 className="text-2xl mb-8 text-gray-200">
                            Not much, but it could be a life form. This is Rouge Two. this is Rouge
                            Two. Captain Solo, so you copy?
                        </h3>
                        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all">
                            Commander Skywalker, do you copy?
                        </button>
                    </div>
                </div>
                {/* Features */}
                <section className="container mx-auto px-6 p-10">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Artoo!
                    </h2>
                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2 pr-10">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">Vortex</h4>
                            <p className="text-gray-600 mb-8">
                                Their primary target will be the power generators. Prepare to open the
                                shield. Sir, Rebel ships are coming into our sector. Good. Our first
                                catch of the day. Stand by, ion control....Fire! The first transport
                                is away.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img
                                className="rounded-lg"
                                src="https://pbs.twimg.com/media/CR45LOXVEAADG5E.jpg"
                                alt="Vortex"
                            />
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2">
                            <img
                                className="rounded-lg"
                                src="https://www.thesun.co.uk/wp-content/uploads/2019/06/SWJFO-EAPlay-08-1.jpg"
                                alt="use the force"
                            />
                        </div>
                        <div className="w-full md:w-1/2 pl-10">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">
                                Use the Force!
                            </h4>
                            <p className="text-gray-600 mb-8">
                                We'll never get it out now. So certain are you. Always with you it
                                cannot be done. Hear you nothing that I say? Master, moving stones
                                around is one thing. This is totally different. No! No different!
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2 pr-10">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">
                                Life creates it
                            </h4>
                            <p className="text-gray-600 mb-8">
                                There is no try. I can't. It's too big. Size matters not. Look at me.
                                Judge me by my size, do you? Hm? Mmmm. And well you should not. For my
                                ally in the Force. And a powerful ally it is.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img
                                className="rounded-lg"
                                src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ferikkain%2Ffiles%2F2018%2F01%2FRey-Luke.jpg"
                                alt="Syncing"
                            />
                        </div>
                    </div>
                </section>
                {/* Testimonials */}
                <section className="bg-gray-100">
                    <div className="container mx-auto px-6 py-20">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                            Artoo expresses
                        </h2>
                        <div className="flex flex-wrap">
                            <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                                    <p className="text-gray-800 text-base px-6 mb-5">
                                        How are you feeling, kid? You don't look so bad to me. In fact,
                                        you look strong enough to pull the ears off a Gundark. Thanks to
                                        you.
                                    </p>
                                    <p className="text-gray-500 text-xs md:text-sm px-6">
                                        Luke Skywalker
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                                    <p className="text-gray-800 text-base px-6 mb-5">
                                        That's two you owe me, junior. Well your Worship, looks like you
                                        managed to keep me around for a little while longer. I had nothing
                                        to do with it.
                                    </p>
                                    <p className="text-gray-500 text-xs md:text-sm px-6">
                                        Emperor's Royal Guards
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                                <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                                    <p className="text-gray-800 text-base px-6 mb-5">
                                        General Rieekan thinks it's dangerous for any ships to leave the
                                        system until we've activated the energy shield. That's a good
                                        story. I think you just can't bear to let a gorgeous guy like me
                                        out of your sight
                                    </p>
                                    <p className="text-gray-500 text-xs md:text-sm px-6">
                                        Queen Mother Ta'a Chume
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Call to Action*/}
                <section style={{ backgroundColor: "#667eea" }}>
                    <div className="container mx-auto px-6 text-center py-20">
                        <h2 className="mb-6 text-4xl font-bold text-center text-white">
                            Headquarters personnel
                        </h2>
                        <h3 className="my-4 text-2xl text-white">
                            Report to command center. Take it easy.
                        </h3>
                        <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600">
                            Report
                        </button>
                    </div>
                </section>
                {/*Footer*/}
                <footer className="bg-gray-100">
                    <div className="container mx-auto px-6 pt-10 pb-6">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/4 text-center md:text-left ">
                                <h5 className="uppercase mb-6 font-bold">Links</h5>
                                <ul className="mb-4">
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            I'll return
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            I promise
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Reckless is he
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 text-center md:text-left ">
                                <h5 className="uppercase mb-6 font-bold">Legal</h5>
                                <ul className="mb-4">
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Emperor's Terms
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Pulverized?
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 text-center md:text-left ">
                                <h5 className="uppercase mb-6 font-bold">Social</h5>
                                <ul className="mb-4">
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Corellia
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Bilbringi
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Fondor
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 text-center md:text-left ">
                                <h5 className="uppercase mb-6 font-bold">Through the Force</h5>
                                <ul className="mb-4">
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Journey to the Emperor
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            Lord Vader ship approaching?
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover:underline text-gray-600 hover:text-orange-500"
                                        >
                                            X-wing class
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        </>
    );
}

export default Home;
