import { createPortal } from "react-dom"
import { Container } from "./styled"
import { ModalProps } from "../../providers/ContactContext/type"
import { useEffect, useRef } from "react"


export const Modal = ({ children, toggleModal, blockClosing }: ModalProps) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!ref.current) {
                return
            }

            if (!event.target) {
                return
            }

            if (!ref.current.contains(event.target as HTMLElement)) {
                toggleModal()
            }
        }
        window.addEventListener("mousedown", handleClick)
        return () => {
            window.removeEventListener("mousedown", handleClick)
        }

    }, [toggleModal])

    return createPortal(
        <Container>
            <div ref={blockClosing ? null : ref}>
                {children}
            </div>
        </Container>, document.body
    )
}