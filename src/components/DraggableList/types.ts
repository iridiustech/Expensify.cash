import type {DraggableChildrenFn} from 'react-beautiful-dnd';
import type {RenderItemParams} from 'react-native-draggable-flatlist';

type DraggableListData<T> = {
    data: T[];
};

type DraggableListProps<T> = {
    keyExtractor: (item: T, index: number) => string;
    renderItem: (params: RenderItemParams<T>) => React.ReactNode;
    onDragEnd?: (params: DraggableListData<T>) => void;
    onDragBegin?: () => void;
    onPlaceholderIndexChange?: (placeholderIndex: number) => void;
    renderClone?: DraggableChildrenFn;
    shouldUsePortal?: boolean;
    ListFooterComponent?: React.ReactElement;
} & DraggableListData<T>;

export type {DraggableListProps, RenderItemParams};
