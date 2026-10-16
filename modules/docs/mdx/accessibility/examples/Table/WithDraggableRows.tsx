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

import {TertiaryButton, buttonStencil} from '@workday/canvas-kit-react/button';
import {AccessibleHide} from '@workday/canvas-kit-react/common/';
import {Table} from '@workday/canvas-kit-react/table';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
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

const dragHandleStyles = createStyles({
  [buttonStencil.vars.borderRadius]: system.legacy.shape.sm,
});

const feedbackStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.xs,
  marginBlockStart: system.gap.md,
  padding: system.padding.md,
  backgroundColor: system.color.surface.alt.default,
  borderRadius: system.legacy.shape.sm,
  border: `${px2rem(1)} solid ${system.color.border.contrast.default}`,
});

const feedbackLabelStyles = createStyles({
  fontWeight: system.fontWeight.bold,
  margin: 0,
});

const feedbackMessageStyles = createStyles({
  margin: 0,
});

const keyboardInstructions =
  'Space or Enter picks up and drops this row. Use arrow keys to move up or down. Escape to cancel.';

const initialAnnouncement = 'Move a row to see screen reader feedback.';

const screenReaderInstructions: ScreenReaderInstructions = {
  // dnd-kit associates these instructions with every sortable drag handle.
  draggable: keyboardInstructions,
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
        <Tooltip type="muted" title="Move row">
          <TertiaryButton
            aria-label={`Move row ${employee.name}`}
            cs={dragHandleStyles}
            icon={draggableVerticalIcon}
            size="small"
            {...attributes}
            {...listeners}
          />
        </Tooltip>
      </Table.Cell>
      <Table.Header scope="row">{employee.name}</Table.Header>
      <Table.Cell>{employee.jobTitle}</Table.Cell>
    </Table.Row>
  );
};

export const DraggableRows = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [visibleAnnouncement, setVisibleAnnouncement] = useState(initialAnnouncement);
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
    // The same string is printed below the table. That visible text is not a live region.
    const announce = (message: string) => {
      setVisibleAnnouncement(message);
      return message;
    };

    // Contextual announcements replace dnd-kit's generic live-region messages.
    return {
      onDragStart({active}) {
        return announce(
          `${employeeName(active.id)} row picked up. Current position ${position(active.id)} of ${
            employees.length
          }.`
        );
      },
      onDragOver({active, over}) {
        if (!over) {
          return;
        }
        return announce(
          `${employeeName(active.id)} row moved to position ${position(over.id)} of ${
            employees.length
          }.`
        );
      },
      onDragEnd({active, over}) {
        if (!over) {
          return announce(
            `${employeeName(active.id)} row was not moved. It remains at position ${position(
              active.id
            )} of ${employees.length}.`
          );
        }
        return announce(
          `${employeeName(active.id)} row dropped at position ${position(over.id)} of ${
            employees.length
          }.`
        );
      },
      onDragCancel({active}) {
        return announce(
          `${employeeName(active.id)} row movement cancelled. It returned to position ${position(
            active.id
          )} of ${employees.length}.`
        );
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
                <AccessibleHide>Sort</AccessibleHide>
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
      <div className={feedbackStyles}>
        <p className={feedbackLabelStyles}>Keyboard instructions</p>
        <p className={feedbackMessageStyles}>{keyboardInstructions}</p>
        <p className={feedbackLabelStyles}>Screen reader feedback</p>
        <p className={feedbackMessageStyles}>{visibleAnnouncement}</p>
      </div>
    </DndContext>
  );
};
