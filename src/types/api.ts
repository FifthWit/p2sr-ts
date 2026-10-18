export type BoardsLevelJson = Record<string, {
    
}>

export interface BoardsRunData {
    id: string;
    note: string |null;
    submission: number;
    changelogId: number;
    playerRank: number;
    scoreRank: number;
    score: number;
    date: string; 
    hasDemo: boolean;
    youtubeId: string | null;
    pending: boolean;
    autorenderId: string | null;
    userData: {
        boardName: string;
        avatar: string;
    }
}