export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 130 130"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="65" cy="65" r="65" fill="#5A4EAE" />
            <g stroke="#FFF" strokeWidth="1.5">
                {/*// <!-- Neural Network Nodes spread out in a circular pattern -->*/}
                {/*// <!-- Outer Layer -->*/}
                <circle
                    cx="65"
                    cy="20"
                    r="5"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                />
                {/*// <!-- Top Center -->*/}
                <circle
                    cx="100"
                    cy="30"
                    r="5"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                />
                {/*// <!-- Top Right -->*/}
                <circle
                    cx="110"
                    cy="65"
                    r="5"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                />
                {/*// <!-- Middle Right -->*/}
                <circle
                    cx="100"
                    cy="100"
                    r="5"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                />
                {/*// <!-- Bottom Right -->*/}
                {/*// <!-- Center Circle -->*/}
                <circle
                    cx="65"
                    cy="65"
                    r="24"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                />
                {/*// <!-- Connections pointing towards the center circle, not touching -->*/}
                <line x1="97" y1="33" x2="70" y2="60" stroke="white" />
                {/*// <!-- Top Right to Near Center -->*/}
                <line x1="97" y1="97" x2="70" y2="70" stroke="white" />
                {/*// <!-- Bottom Right to Near Center -->*/}
                <line x1="65" y1="25" x2="65" y2="57" stroke="white" />
                {/*// <!-- Top Center to Near Center -->*/}
                <line x1="105" y1="65" x2="73" y2="65" stroke="white" />
                {/*// <!-- Middle Right to Near Center -->*/}
            </g>
        </svg>
    )
}
