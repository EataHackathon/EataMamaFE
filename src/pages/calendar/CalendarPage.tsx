import FullCalendar from '@fullcalendar/react';
import interactionPlugin, {
  type DateClickArg,
} from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@/styles/calendar.css';
import styled from '@emotion/styled';
import { NAV_HEIGHT } from '@/constants';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';

const CalendarPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleDateClick = (info: DateClickArg) => {
    navigate(`/calendar?date=${info.dateStr}`);
  };

  return (
    <Container>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        height={`calc(100dvh - ${NAV_HEIGHT}px - ${theme.spacing[8]}px)`}
        titleFormat={(date) => {
          const year = date.date.year;
          const month = date.date.month + 1;
          return `${year}년 ${month}월`;
        }}
        initialView='dayGridMonth'
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
        dateClick={handleDateClick}
        buttonText={{
          prev: '◀',
          next: '▶',
        }}
        dayCellContent={(arg) => {
          return (
            <DayBox variant={arg.isToday ? 'today' : 'default'}>
              {arg.dayNumberText}
            </DayBox>
          );
        }}
      />
    </Container>
  );
};

export default CalendarPage;

const Container = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing[4]};
`;

const DayBox = styled.div<{ variant: 'default' | 'today' }>`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, variant }) =>
    variant === 'today' ? theme.colors.primary : theme.colors.background};
  color: ${({ theme, variant }) =>
    variant === 'today' ? theme.colors.text.white : 'inherit'};
`;
