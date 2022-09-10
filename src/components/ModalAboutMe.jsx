import { Modal } from 'flowbite-react'
import { Button } from 'flowbite-react';

export default function ModalAboutMe({ show, onClose }) {
    if (!show) return false
    return (
        <Modal
            title="About Me"
            show={show}
            onClose={onClose}
        >
            <Modal.Header >
                Litle About Me
            </Modal.Header>
            <Modal.Body>
                <div className="text-left">
                    <strong>My Vision as Developer</strong>
                    <p>
                        Build sustainable SaaS business app that can help people to solve their problem and love to use it.
                    </p>
                    <br />
                    <strong>My Mission as Developer</strong>
                    <br />
                    <ul>
                        <li>
                            Connecting my skillset and opportunnity tech to make a platform site.
                        </li>
                    </ul>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={onClose} className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">close</button>
            </Modal.Footer>
        </Modal>
    )
}
