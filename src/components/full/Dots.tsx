const Dot = ({ num, currentPage }: { num: number, currentPage: number }) => {
    return (
        <div
            style={{
                width: 10,
                height: 10,
                border: "1px solid white",
                borderRadius: 999,
                backgroundColor: currentPage === num ? "white" : "transparent",
                transitionDuration: '300',
                transition: "background-color 0.5s",
            }}
        ></div>
    );
};

const Dots = ({ currentPage }: { currentPage: number }) => {
    return (
        <div style={{ position: "fixed", top: "50%", right: 400, zIndex: 999 }}>
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
                <Dot num={1} currentPage={currentPage}></Dot>
                <Dot num={2} currentPage={currentPage}></Dot>
                <Dot num={3} currentPage={currentPage}></Dot>
            </div>
        </div>
    );
};

export default Dots;