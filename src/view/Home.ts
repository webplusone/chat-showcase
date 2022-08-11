
import { BodyNode, DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import CommonUtil from "../CommonUtil";
import Layout from "./Layout";

export default class Home implements View {

    private roomContainer: DomNode;
    private chatContainer: DomNode;

    private container: DomNode;

    constructor() {
        Layout.current.content.append(
            this.container = el(".home-view",
                el(".channel-container",
                    el("img", { src: "/images/mock/unnamed.png", alt: "channel-1" }),
                ),
                this.roomContainer = el(".room-container",
                    el(".room-item", {
                        click: () => {
                            if (CommonUtil.isMobile()) {
                                this.chatContainer.style({
                                    display: "block",
                                });
                                this.roomContainer.style({
                                    display: "none",
                                });
                            }
                        },
                    },
                        el("img", { src: "/images/mock/unnamed.png", alt: "room-image" }),
                        el(".content",
                            el(".title-container",
                                el("h6", "룸4216A"),
                                el("p", "오전 11:55"),
                            ),
                            el("p", "심영재님이 이모티콘을 보냈어요"),
                        ),
                    ),
                ),
                this.chatContainer = el(".chat-container",
                    el(".top", {
                        click: () => {
                            this.chatContainer.style({
                                display: "none",
                            });
                            this.roomContainer.style({
                                display: "flex",
                            });
                        },
                    },
                        el("img", { src: "/images/icn/arrow-back.svg", alt: "arrow-back" }),
                        el("p", "채팅방"),
                    ),
                    el(".content",
                        el(".dialogue",
                            el("img", { src: "/images/mock/unnamed2.png", alt: "room-image" }),
                            el(".content",
                                el(".title-container",
                                    el("h6", "똥상우"),
                                    el("p", "오전 11:51"),
                                ),
                                el("p", "안녕, 안녕"),
                            ),
                        ),
                        el(".dialogue",
                            el("img", { src: "/images/mock/unnamed.png", alt: "room-image" }),
                            el(".content",
                                el(".title-container",
                                    el("h6", "심영재"),
                                    el("p", "오전 11:55"),
                                ),
                                el("p", "심영재님이 이모티콘을 보냈어요"),
                            ),
                        ),
                    ),
                    el(".input-container",
                        el("input", { placeholder: "메시지를 입력해주세요." }),
                    ),
                ),
            ).appendTo(BodyNode),
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}