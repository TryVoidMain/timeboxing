namespace timeboxing_back.Types
{
    public class Schedule
    {
        private List<ScheduleBlock> Blocks;

        public Schedule()
        {
            Blocks = new List<ScheduleBlock>();
        }

        public bool AddBlock(ScheduleBlock block)
        {
            if (!CheckForCrossovers(block))
            {
                Blocks.Add(block);
                return true;
            }

            return false;
        }

        public bool RemoveBlock(ScheduleBlock block)
        {
            if (Blocks.Any(b => b.Id == block.Id))
                return Blocks.Remove(Blocks.First(b => b.Id == block.Id)); 

            return false;
        }

        public bool CheckForCrossovers(ScheduleBlock block)
        {
            if (!Blocks.Any(b => b.StartTime == block.StartTime || b.EndTime == block.EndTime))
                return false;

            return true;
        }
    }
}
