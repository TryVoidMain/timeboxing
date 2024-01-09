namespace timeboxing_back.Types
{
    public class Schedule
    {
        private List<ScheduleBlock> blocks = new List<ScheduleBlock>();

        public Schedule() { }

        public bool AddBlock(ScheduleBlock block)
        {
            if (!CheckForCrossovers(block))
            {
                blocks.Add(block);
                return true;
            }

            return false;
        }

        public bool RemoveBlock(ScheduleBlock block)
        {
            if (blocks.Any(b => b.Id == block.Id))
                return blocks.Remove(blocks.First(b => b.Id == block.Id)); 

            return false;
        }

        public bool UpdateBlock(ScheduleBlock block)
        {
            if (blocks.Any(b => b.Id == block.Id))
            {
                var currentBlock = blocks.FirstOrDefault(b => b.Id == block.Id);
                currentBlock = block;
                return true;
            }

            return false;
        }

        public bool CheckForCrossovers(ScheduleBlock block)
        {
            if (!blocks.Any(b => b.StartTime == block.StartTime || b.EndTime == block.EndTime))
                return false;

            return true;
        }
    }
}
