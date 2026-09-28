import {
  Announcements,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  ScreenReaderInstructions,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {useMemo, useState} from 'react';

import {focusRing} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {Table} from '@workday/canvas-kit-react/table';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {draggableVerticalIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

interface Employee {
  id: string;
  name: string;
  jobTitle: string;
}

const initialEmployees: Employee[] = [
  {id: 'employee-1', name: 'Avery Johnson', jobTitle: 'Product Designer'},
  {id: 'employee-2', name: 'Jordan Lee', jobTitle: 'Software Engineer'},
  {id: 'employee-3', name: 'Morgan Smith', jobTitle: 'Product Manager'},
  {id: 'employee-4', name: 'Riley Chen', jobTitle: 'UX Researcher'},
];

const tableHeaderStyles = createStyles({
  backgroundColor: system.color.surface.default,
});

const tableRowStyles = createStyles({
  gridTemplateColumns: `${system.legacy.size.lg} minmax(0, 1fr) minmax(0, 1fr)`,
});

const handleCellStyles = createStyles({
  alignItems: 'center',
  justifyItems: 'center',
});

const visuallyHiddenStyles = createStyles({
  border: 0,
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: px2rem(1),
  margin: px2rem(-1),
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: px2rem(1),
});

const dragHandleStyles = createStyles({
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: system.color.bg.transparent.default,
  border: 0,
  color: system.color.fg.default,
  cursor: 'grab',
  display: 'inline-flex',
  height: system.legacy.size.sm,
  justifyContent: 'center',
  padding: 0,
  touchAction: 'none',
  width: system.legacy.size.sm,

  '&:hover, &.hover': {
    backgroundColor: system.color.bg.alt.default,
  },
  '&:focus-visible, &.focus': {
    ...focusRing(),
  },
  '&:active, &.active': {
    cursor: 'grabbing',
  },
});

const screenReaderInstructions: ScreenReaderInstructions = {
  // dnd-kit associates these instructions with every sortable drag handle.
  draggable:
    'To reorder this row, press Space or Enter to pick it up. Use the Up and Down Arrow keys to move it. Press Space or Enter again to drop it, or press Escape to cancel.',
};

const SortableEmployeeRow = ({employee}: {employee: Employee}) => {
  const {attributes, isDragging, listeners, setNodeRef, transform, transition} = useSortable({
    id: employee.id,
  });

  return (
    <Table.Row
      ref={setNodeRef}
      cs={tableRowStyles}
      style={{
        opacity: isDragging ? system.opacity.disabled : undefined,
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 1 : undefined,
      }}
    >
      <Table.Cell cs={handleCellStyles}>
        <button
          type="button"
          aria-label={`Reorder row for ${employee.name}`}
          className={dragHandleStyles}
          {...attributes}
          {...listeners}
        >
          <SystemIcon aria-hidden="true" icon={draggableVerticalIcon} size="sm" />
        </button>
      </Table.Cell>
      <Table.Header scope="row">{employee.name}</Table.Header>
      <Table.Cell>{employee.jobTitle}</Table.Cell>
    </Table.Row>
  );
};

export const DraggableRows = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const announcements = useMemo<Announcements>(() => {
    const employeeName = (id: string | number) =>
      employees.find(employee => employee.id === id)?.name ?? 'Unknown employee';
    const position = (id: string | number) =>
      employees.findIndex(employee => employee.id === id) + 1;

    // Contextual announcements replace dnd-kit's generic live-region messages.
    return {
      onDragStart({active}) {
        return `${employeeName(active.id)} row picked up. Current position ${position(
          active.id
        )} of ${employees.length}.`;
      },
      onDragOver({active, over}) {
        if (!over) {
          return;
        }
        return `${employeeName(active.id)} row moved to position ${position(over.id)} of ${
          employees.length
        }.`;
      },
      onDragEnd({active, over}) {
        if (!over) {
          return `${employeeName(active.id)} row was not moved. It remains at position ${position(
            active.id
          )} of ${employees.length}.`;
        }
        return `${employeeName(active.id)} row dropped at position ${position(over.id)} of ${
          employees.length
        }.`;
      },
      onDragCancel({active}) {
        return `${employeeName(active.id)} row movement cancelled. It returned to position ${position(
          active.id
        )} of ${employees.length}.`;
      },
    };
  }, [employees]);

  const handleDragEnd = ({active, over}: DragEndEvent) => {
    if (!over || active.id === over.id) {
      return;
    }

    setEmployees(currentEmployees => {
      const oldIndex = currentEmployees.findIndex(employee => employee.id === active.id);
      const newIndex = currentEmployees.findIndex(employee => employee.id === over.id);
      return arrayMove(currentEmployees, oldIndex, newIndex);
    });
  };

  const employeeIds = employees.map(employee => employee.id);

  return (
    <DndContext
      accessibility={{announcements, screenReaderInstructions}}
      collisionDetection={closestCenter}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={employeeIds} strategy={verticalListSortingStrategy}>
        <Table>
          <Table.Caption>Employee roster</Table.Caption>
          <Table.Head>
            <Table.Row cs={tableRowStyles}>
              <Table.Header scope="col" cs={tableHeaderStyles}>
                <span className={visuallyHiddenStyles}>Row reorder controls</span>
              </Table.Header>
              <Table.Header scope="col" cs={tableHeaderStyles}>
                Employee Name
              </Table.Header>
              <Table.Header scope="col" cs={tableHeaderStyles}>
                Job Title
              </Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {employees.map(employee => (
              <SortableEmployeeRow key={employee.id} employee={employee} />
            ))}
          </Table.Body>
        </Table>
      </SortableContext>
    </DndContext>
  );
};
