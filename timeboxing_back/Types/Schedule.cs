namespace timeboxing_back.Types
{
    public class Schedule
    {
        public List<ScheduleBlock> Blocks { get; set; } = new List<ScheduleBlock>();

        public Schedule() { }

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

        public bool UpdateBlock(ScheduleBlock block)
        {
            if (Blocks.Any(b => b.Id == block.Id))
            {
                var currentBlock = Blocks.FirstOrDefault(b => b.Id == block.Id);
                currentBlock = block;
                return true;
            }

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
