import React from "react";

export default class Test extends React.Component {
    state = {
        navBackground: "red"
    };

    componentDidMount() {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 70 ? "red" : "blue";

            this.setState({ navBackground: backgroundcolor });
        });
    }

    render() {
        return (
            <div>
                <h2
                    style={{
                        backgroundColor: `${this.state.navBackground}`,
                        position: "fixed",
                        top: "0px",
                        width: "100%"
                    }}
                >
                    NaveBar
                </h2>
            </div>
        );
    }
}

