import { Dispatch, SetStateAction } from "react";

const Dot = ({ num, currentPage }: { num: number, currentPage: number }) => {
    return (
        <div className="relative cursor-pointer">
            <div
                className="absolute"
                style={{
                    top: -5,
                    left: -5,
                    width: 20,
                    height: 20,
                    border: "1px solid white",
                    borderRadius: 999,
                    backgroundColor: "transparent",
                    transitionDuration: '300',
                    transition: "background-color 0.5s",
                }}
            >
            </div>
            <div
                className="absolute"
                style={{
                    top: 0,
                    left: 0,
                    width: 10,
                    height: 10,
                    border: "1px solid white",
                    borderRadius: 999,
                    backgroundColor: currentPage === num ? "white" : "transparent",
                    transitionDuration: '300',
                    transition: "background-color 0.5s",
                }}
            ></div>
        </div>
    );
};

const Dots = ({ currentPage, setCurrentPage }: { currentPage: number, setCurrentPage: Dispatch<SetStateAction<number>> }) => {
    return (
        <div style={{ position: "absolute", top: "40%", right: 50, zIndex: 999 }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: 20,
                    height: 100,
                }}
            >
                <div onClick={() => setCurrentPage(0)}><Dot num={1} currentPage={currentPage}></Dot></div>
                <div onClick={() => setCurrentPage(1)}><Dot num={2} currentPage={currentPage}></Dot></div>
                <div onClick={() => setCurrentPage(2)}><Dot num={3} currentPage={currentPage}></Dot></div>
            </div>
        </div>
    );
};

export default Dots;