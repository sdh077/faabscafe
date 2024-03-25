export interface IBoard {
    id: string;
    created_at: string;
    title: string;
    use_yn: boolean
}

export interface IDocument {
    id: string;
    created_at: string;
    use_yn: boolean;
    title: string;
    content: string;
    view_yn: boolean;
    image: string;
    board_id: string;
    description: string;
    document_tag: Tag[]
}

export interface Tag {
    id: number
    tag: {
        id: string
        name: string
    }
}